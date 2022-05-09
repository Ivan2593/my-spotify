export class AlbumScript {
    static setAlbumHead(album_url_icon, playlist_name, album_description){
        return `
            <div class="album-head">
                <img class="album-head__icon" src="${album_url_icon}" alt="icon"/>
                <div class="album-head__info">
                    <p class="album-head__white-text">ПЛЕЙЛИСТ</p>
                    <h1 class="album-head__name hide-unnecessary">${playlist_name}</h1>
                    <p class="album-head__description hide-unnecessary">${album_description}</p>
                </div>
            </div>
        `;
    }
    static setDate(day, month, year){
        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`;
        }
        return `${year}-${day}-${month}`;
    }
    static setSongsHead(){
        return `
            <div class="song visibility">
                <p class="song_id">#</p>
                <p class="song_min-width">НАЗВАНИЕ</p>
                <p class="song_min-width">АЛЬБОМ</p>
                <p class="song_min-width">ДАТА ДОБАВЛЕНИЯ</p>
                <p class="song__info">ВРЕМЯ</p>
            </div>
            <div class="songs">
            </div>
        `;
    }
    static setTime(time_m, time_s){
        if (time_s<10){
            time_s = `0${time_s}`
        }
        return `${time_m}:${time_s}`;
    }
    static setSong(date, artists_name, song_name, album_name, time, id, song_icon){
        return `
            <div class="song">
                <div class="song__number">
                    <p class="song__number-n">${id}</p>
                    <img class="song__play-icon" src="http://localhost:3000/images/play-icon.png" alt="icon"/>
                </div>
                <div class="flex-container song_min-width">
                    <img class="song__card-icon" src="${song_icon}" alt="icon"/>
                    <div>
                        <h3 class="song__name">${song_name}</h3>
                        <a class="song__author">${artists_name}</a>
                    </div>
                </div>
                <p class="song__author song_min-width">${album_name}</p>
                <p class="song__data song_min-width">${date}</p>
                <div class="song__info">
                    <img class="favourite-icon song__play-icon" src="http://localhost:3000/images/not-favorite-icon.png"
                         alt="icon"/>
                    <p class="visibility">${time}</p>
                    <img class="favourite-icon song__play-icon" src="http://localhost:3000/images/info-icon.png" alt="icon"/>
                </div>
            </div>
        `;
    }
}

export class HomeScript {
    static setCatalog(title){
        return `
            <div class="catalog">
                <div class="catalog__info">
                    <a class="cursor-visibility"><h2 class="font-color-white">${title}</h2></a>
                    <a class="catalog__completely">ВСЕ</a>
                </div>
                <div class="catalog__albums">
                </div>
            </div>
        `;
    }
    static setAlbum(description, name, icon, playlist_id){
        return `
            <a href="/playlists/${playlist_id}" class="album">
                <img class="album__card-icon" src="${icon}" alt="icon"/>
                <h3 class="album__name">${name}</h3>
                <p class="album__info">${description}</p>
            </a>
        `;
    }
}

export class SearchScript {
    static getSearchLine() {
        return `
            <input class="search-input"/>
        `;
    }
    static setSearchTrack(description, name, icon){
        return `
            <div class="album">
                <img class="album__card-icon" src="${icon}" alt="icon"/>
                <h3 class="album__name">${name}</h3>
                <p class="album__info">${description}</p>
            </div>
        `;
    }
}
