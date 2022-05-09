import React from "react";
import {AlbumScript} from "./Script";
import {HomeScript} from "./Script";
import {SearchScript} from "./Script";

export class Api {
    static accessPromise = Api.getToken();
    static async getToken() {
        let client_id = 'ea065714b18d4708809789b75a9042b4';
        let client_secret = 'ffe3c172027646008a2308a0e0ff0eb5';
        return await fetch('/api/token', {
            headers: {
                'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
                'type-content': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            }),
            method: 'POST'
        }).then(r => {return r.json().then(r=> {return r.access_token})});
    }
    static header_navigation(){
        const header__pointer = document.querySelectorAll('.header__pointer');
        header__pointer[0].addEventListener('click', (event) => {
            window.history.back();
        });
        header__pointer[1].addEventListener('click', (event) => {
            window.history.forward();
        });
    }
    static search(){
        const search_input = document.querySelector('.search-input');
        search_input.addEventListener('input', (event) => {
            const searchValue = event.target.value;
            [...document.querySelectorAll('.album')].forEach(item => item.remove());
            if (searchValue.length < 2) {
                return;
            }
            this.searchTrack(searchValue);

        });
    }
    static searchLine(){
        const header = document.querySelector('.header');
        header.insertAdjacentHTML('beforeend', SearchScript.getSearchLine());
    }
    static searchTrack(track){
        Api.accessPromise.then(AccessToken => {
            const script = document.querySelector('.search');
            fetch(`/v1/search?q=${track}&type=album`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${AccessToken}`,
                    'type-content': 'application/json'
                }
            }).then(response => response.json())
                .then(({albums}) => {
                    albums.items.forEach(item => {
                        let name = item.name;
                        let artist = item.artists[0].name;
                        let icon = item.images[1].url;
                        script.insertAdjacentHTML('beforeend', SearchScript.setSearchTrack(artist, name, icon));
                    })
                })
        });
    }
    static getHomePage(){
        Api.accessPromise.then(AccessToken => {
            const script = document.querySelector('.content');
            fetch(`/v1/browse/categories`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${AccessToken}`,
                    'type-content': 'application/json'
                }
            }).then(response => response.json())
                .then(({categories}) => {
                    categories.items.forEach(item => {
                        let title = item.name
                        script.insertAdjacentHTML('beforeend', HomeScript.setCatalog(title));
                        let catalog = document.querySelectorAll('.catalog');
                        fetch(`/v1/browse/categories/${item.id}/playlists`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${AccessToken}`,
                                'type-content': 'application/json'
                            }
                        }).then(response => {
                            if (response.status !== 200) {
                                catalog[catalog.length - 1].remove();
                            } else {
                                response.json()
                                    .then(({playlists}) => {
                                        if (playlists.items.length > 0) {
                                            playlists.items.forEach(item => {
                                                let playlist_id = item.id;
                                                let description = item.description.toString().replace(/<\/?[^>]+>/gi, '');
                                                let name = item.name.toString();
                                                let icon = item.images[0].url.toString();
                                                let album = HomeScript.setAlbum(description, name, icon, playlist_id);
                                                catalog[catalog.length - 1].children[1].insertAdjacentHTML('beforeend', album);
                                            })
                                        } else {
                                            catalog[catalog.length - 1].remove();
                                        }
                                    })
                            }
                        })
                    })
                })
        });
    }
    static getAlbumPage(){
        Api.accessPromise.then(AccessToken => {
            const script = document.querySelector('.content');
            fetch(`/v1/${document.location.pathname}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${AccessToken}`,
                    'type-content': 'application/json'
                }
            }).then(response => response.json())
                .then(response => {
                    let album_url_icon = response.images[0].url;
                    let playlist_name = response.name;
                    let album_description = response.description;
                    script.insertAdjacentHTML('beforeend', AlbumScript.setAlbumHead(album_url_icon, playlist_name, album_description));
                    script.insertAdjacentHTML('beforeend', AlbumScript.setSongsHead());
                    let songs = document.querySelector('.songs');
                    let i = 0;
                    response.tracks.items.forEach(item => {
                        let date = new Date(item.added_at.toString());
                        let artists_name = item.track.artists[0].name;
                        let song_name = item.track.name;
                        let album_name = item.track.album.name;
                        let time = Math.floor(item.track.duration_ms/1000);
                        let time_s = time % 60;
                        let time_m = Math.floor(time / 60);
                        let song_icon = item.track.album.images[2].url.toString();
                        i++;
                        songs.insertAdjacentHTML('beforeend', AlbumScript.setSong(AlbumScript.setDate(date.getDate(),
                            date.getMonth(), date.getFullYear()), artists_name, song_name, album_name,
                            AlbumScript.setTime(time_m,time_s), i, song_icon));
                    })
                })
        });
    }

}
