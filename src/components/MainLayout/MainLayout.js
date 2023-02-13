import React, { useState } from 'react';
import './MainLayout.scss';
import SmallCard from './SmallCard/SmallCard';
import LargeCard from './LargeCard/LargeCard';
import BottomSheet from '../BottomSheet/BottomSheet';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
const dataMock =
    [
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission\nbecomes torn between following his orders and protecting the world he feels is his\nhome.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@\n@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "890,617",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZ\nTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZ\nTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZ\nTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZ\nTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",

                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZ\nTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
            ]
        },
        {
            "Title": "I Am Legend",
            "Year": "2007",
            "Rated": "PG-13",
            "Released": "14 Dec 2007",
            "Runtime": "101 min",
            "Genre": "Drama, Horror, Sci-Fi",
            "Director": "Francis Lawrence",
            "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard\nMatheson (novel), John William Corrington, Joyce Hooper Corrington",
            "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
            "Plot": "Years after a plague kills most of humanity and transforms the rest\ninto monsters, the sole survivor in New York City struggles valiantly to find a\ncure.",
            "Language": "English",
            "Country": "USA",
            "Awards": "9 wins & 21 nominations.",
            "Poster":
                "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d0688a1d44131c72\n39999cad2ceeec122383367b38450c4f0d005127442d7d94._RI_V_TTW_.jpg",
            "Metascore": "65",
            "imdbRating": "7.2",
            "imdbVotes": "533,874",
            "imdbID": "tt0480249",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZ\nTYwMDA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZ\nTYwMTA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZ\nTYwMjA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15Bb\nWU2MDMwNDc3OA@@._V1_.jpg"
            ]
        },
        {

            "Title": "300",
            "Year": "2006",
            "Rated": "R",
            "Released": "09 Mar 2007",
            "Runtime": "117 min",
            "Genre": "Action, Drama, Fantasy",
            "Director": "Zack Snyder",
            "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon\n(screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
            "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
            "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at\nThermopylae in 480 B.C.",
            "Language": "English",
            "Country": "USA",
            "Awards": "16 wins & 42 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V\n1_SX300.jpg",
            "Metascore": "52",
            "imdbRating": "7.7",
            "imdbVotes": "611,046",
            "imdbID": "tt0416449",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZ\nTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZ\nTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZ\nTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
            ]
        },
        {
            "Title": "The Avengers",
            "Year": "2012",
            "Rated": "PG-13",
            "Released": "04 May 2012",
            "Runtime": "143 min",
            "Genre": "Action, Sci-Fi, Thriller",
            "Director": "Joss Whedon",
            "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
            "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",

            "Plot": "Earth's mightiest heroes must come together and learn to fight as a\nteam if they are to stop the mischievous Loki and his alien army from enslaving\nhumanity.",
            "Language": "English, Russian",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@\n@._V1_SX300.jpg",
            "Metascore": "69",
            "imdbRating": "8.1",
            "imdbVotes": "1,003,301",
            "imdbID": "tt0848228",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15Bb\nWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZ\nTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZ\nTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZ\nTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZ\nTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
            ]
        },
        {
            "Title": "The Wolf of Wall Street",
            "Year": "2013",
            "Rated": "R",
            "Released": "25 Dec 2013",
            "Runtime": "180 min",
            "Genre": "Biography, Comedy, Crime",
            "Director": "Martin Scorsese",
            "Writer": "Terence Winter (screenplay), Jordan Belfort (book)",
            "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
            "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy\nstock-broker living the high life to his fall involving crime, corruption and the\nfederal government.",

            "Language": "English, French",
            "Country": "USA",
            "Awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE\n@._V1_SX300.jpg",
            "Metascore": "75",
            "imdbRating": "8.2",
            "imdbVotes": "786,985",
            "imdbID": "tt0993846",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZ\nTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZ\nTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15Bb\nWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZ\nTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZ\nTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
            ]
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt\nto ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
            "Poster":

                "https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE\n@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "937,412",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZ\nTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZ\nTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZ\nTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZ\nTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZ\nTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
            ]
        },
        {
            "Title": "Game of Thrones",
            "Year": "2011-",
            "Rated": "TV-MA",
            "Released": "17 Apr 2011",
            "Runtime": "56 min",
            "Genre": "Adventure, Drama, Fantasy",
            "Director": "N/A",
            "Writer": "David Benioff, D.B. Weiss",
            "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
            "Plot": "While a civil war brews between several noble families in Westeros,\nthe children of the former rulers of the land attempt to rise up to power.\nMeanwhile a forgotten race, bent on destruction, plans to return after thousands of\nyears in the North.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE\n@._V1_SX300.jpg",

            "Metascore": "N/A",
            "imdbRating": "9.5",
            "imdbVotes": "1,046,830",
            "imdbID": "tt0944947",
            "Type": "series",
            "totalSeasons": "7",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjN\njMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1M\njMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmM\nmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiM\nTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxM\nTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
            ]
        },
        {
            "Title": "Vikings",
            "Year": "2013-",
            "Rated": "TV-14",
            "Released": "03 Mar 2013",
            "Runtime": "44 min",
            "Genre": "Action, Drama, History",
            "Director": "N/A",
            "Writer": "Michael Hirst",
            "Actors": "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
            "Plot": "The world of the Vikings is brought to life through the journey of\nRagnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of\nhistory - a man on the edge of myth.",
            "Language": "English, Old English, Norse, Old, Latin",
            "Country": "Ireland, Canada",
            "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "8.6",

            "imdbVotes": "198,041",
            "imdbID": "tt2306299",
            "Type": "series",
            "totalSeasons": "5",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZ\nTgwNTAzOTI2ODE@._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZ\nTgwNDAzOTI2ODE@._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZ\nTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZ\nTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZ\nTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
            ]
        },
        {
            "Title": "Gotham",
            "Year": "2014-",
            "Rated": "TV-14",
            "Released": "01 Aug 2014",
            "Runtime": "42 min",
            "Genre": "Action, Crime, Drama",
            "Director": "N/A",
            "Writer": "Bruno Heller",
            "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
            "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham\nCity in the years before Batman's arrival.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "8.0",
            "imdbVotes": "133,375",
            "imdbID": "tt3749900",
            "Type": "series",

            "totalSeasons": "3",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZ\nTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZ\nTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15Bb\nWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZ\nTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZ\nTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
            ]
        },
        {
            "Title": "Power",
            "Year": "2014-",
            "Rated": "TV-MA",
            "Released": "N/A",
            "Runtime": "50 min",
            "Genre": "Crime, Drama",
            "Director": "N/A",
            "Writer": "Courtney Kemp Agboh",
            "Actors": "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
            "Plot": "James \"Ghost\" St. Patrick, a wealthy New York night club owner who\nhas it all, catering for the city's elite and dreaming big, lives a double life as\na drug kingpin.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 6 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "8.0",
            "imdbVotes": "14,770",
            "imdbID": "tt3281796",
            "Type": "series",
            "totalSeasons": "3",
            "Response": "True",

            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZ\nTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZ\nTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZ\nTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZ\nTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZ\nTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg"
            ]
        },
        {
            "Title": "Narcos",
            "Year": "2015-",
            "Rated": "TV-MA",
            "Released": "28 Aug 2015",
            "Runtime": "49 min",
            "Genre": "Biography, Crime, Drama",
            "Director": "N/A",
            "Writer": "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
            "Actors": "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
            "Plot": "A chronicled look at the criminal exploits of Colombian drug lord\nPablo Escobar.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "8.9",
            "imdbVotes": "118,680",
            "imdbID": "tt2707408",
            "Type": "series",
            "totalSeasons": "2",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZ\n\nTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZ\nTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZ\nTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZ\nTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZ\nTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
            ]
        },
        {
            "Title": "Breaking Bad",
            "Year": "2008-2013",
            "Rated": "TV-14",
            "Released": "20 Jan 2008",
            "Runtime": "49 min",
            "Genre": "Crime, Drama, Thriller",
            "Director": "N/A",
            "Writer": "Vince Gilligan",
            "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
            "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer\nturns to manufacturing and selling methamphetamine in order to secure his family's\nfinancial future.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "9.5",
            "imdbVotes": "889,883",
            "imdbID": "tt0903747",
            "Type": "series",
            "totalSeasons": "5",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZ\nTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",

                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZ\nTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZ\nTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15Bb\nWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZ\nTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
            ]
        },
        {
            "ComingSoon": true,
            "Title": "Doctor Strange",
            "Year": "2016",
            "Rated": "N/A",
            "Released": "04 Nov 2016",
            "Runtime": "N/A",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "Scott Derrickson",
            "Writer": "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon\nSpaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by),\nSteve Ditko (comic book)",
            "Actors": "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda\nSwinton",
            "Plot": "After his career is destroyed, a brilliant but arrogant and conceited\nsurgeon gets a new lease on life when a sorcerer takes him under her wing and\ntrains him to defend the world against evil.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "N/A",
            "imdbVotes": "N/A",
            "imdbID": "tt1211837",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZ\nTgwODMzMDY3OTE@._V1_.jpg",

                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZ\nTgwNzMzMDY3OTE@._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZ\nTgwMDM3MDM2NzE@._V1_.jpg"
            ]
        },
        {
            "ComingSoon": true,
            "Title": "Rogue One: A Star Wars Story",
            "Year": "2016",
            "Rated": "N/A",
            "Released": "16 Dec 2016",
            "Runtime": "N/A",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "Gareth Edwards",
            "Writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll\n(story), Gary Whitta (story), George Lucas (characters)",
            "Actors": "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
            "Plot": "The Rebellion makes a risky move to steal the plans to the Death Star,\nsetting up the epic saga to follow.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 nomination.",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE\n@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            "Metascore": "N/A",
            "imdbRating": "N/A",
            "imdbVotes": "N/A",
            "imdbID": "tt3748528",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZ\nTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZ\nTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZ\nTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZ\n\nTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZ\nTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
            ]
        },
        {
            "ComingSoon": true,
            "Title": "Assassin's Creed",
            "Year": "2016",
            "Rated": "N/A",
            "Released": "21 Dec 2016",
            "Runtime": "N/A",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "Justin Kurzel",
            "Writer": "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie\n(screenplay)",
            "Actors": "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard,\nJeremy Irons",
            "Plot": "When Callum Lynch explores the memories of his ancestor Aguilar and\ngains the skills of a Master Assassin, he discovers he is a descendant of the\nsecret Assassins society.",
            "Language": "English",
            "Country": "UK, France, USA, Hong Kong",
            "Awards": "N/A",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "N/A",
            "imdbVotes": "N/A",
            "imdbID": "tt2094766",
            "Type": "movie",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiN\nDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzM\nTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzN\nzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
                ,

                "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1Y\nTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
            ]
        },
        {
            "ComingSoon": true,
            "Title": "Luke Cage",
            "Year": "2016-",
            "Rated": "TV-MA",
            "Released": "30 Sep 2016",
            "Runtime": "55 min",
            "Genre": "Action, Crime, Drama",
            "Director": "N/A",
            "Writer": "Cheo Hodari Coker",
            "Actors": "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
            "Plot": "Given superstrength and durability by a sabotaged experiment, a\nwrongly accused man escapes prison to become a superhero for hire.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster":
                "https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE\n@._V1_SX300.jpg",
            "Metascore": "N/A",
            "imdbRating": "N/A",
            "imdbVotes": "N/A",
            "imdbID": "tt3322314",
            "Type": "series",
            "totalSeasons": "1",
            "Response": "True",
            "Images": [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZ\nTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZ\nTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZ\nTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZ\nTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZ\nTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg"

            ]
        }
    ]



function MainLayout(props) {
    let [openCard, setopenCardState] = useState(false);
    let [openBottomSheet, setOpenBottomSheet] = useState(false);
    let [singleMovieData, setSingleMovieData] = useState({});

    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        setopenCardState(false);
        if (searchValue !== '') {
            const filteredData = dataMock.filter((item) => {
                return item.Title.toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(dataMock);
        }
    }


    function handleOpenCard(val) {
        if (window.innerWidth > 786) {
            setopenCardState(true);

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setOpenBottomSheet(true);
        }
        setSingleMovieData(val);
    }

    function closeBottomSheet() {
        setOpenBottomSheet(false);
    }

    return (
        <div className={'main_layout_wrapper' + (props.isSideDrawer ? ' noTouch' : '')}>
            <header>
                <div className='main_layout_header d-flex align-center justify-space-bt'>
                    <div className='main_layout_header--search'>
                        <form autoComplete="off">
                            <input type="text" name="search" placeholder="Title, Movies, Keyword" onChange={(e) => searchItems(e.target.value)} />
                        </form>
                    </div>
                    <div className='main_layout_header--other_icons' >
                        <LightModeOutlinedIcon className='light ' />
                        <p className='font-18 fw700 light-color'>Movie App</p>
                        <MoreVertIcon className='noSelect' onClick={props.handleSideDrawer}/>
                    </div>
                </div>
            </header>
            <div className={'main_layout_content' + (openCard ? ' shift' : '')}>
                <LargeCard openCard={openCard} movieData={singleMovieData} />
                <div className='main_layout_content--card_layout'>
                    {searchInput.length > 1 && (
                        filteredResults.map((val, i) => {
                            return (
                                <SmallCard key={i} val={val} handleOpenCard={() => handleOpenCard(val)} />
                            )
                        })
                    )}

                    {
                        (searchInput.length > 1 && filteredResults < 1)
                        &&
                        (<div className='no-result-msg'>

                            <h1 className='fw600 font-21 ln44 white-color'>No results found for your search.</h1>
                        </div>)
                    }

                    {searchInput.length <= 1 && (
                        dataMock.map((val, i) => {
                            return (
                                <SmallCard  key = {i} val={val} handleOpenCard={() => handleOpenCard(val)} />
                            )
                        })
                    )}

                </div>
            </div>
            <BottomSheet movieData={singleMovieData} isBottomSheet={openBottomSheet} closeBS={closeBottomSheet} />
        </div>
    );
}

export default MainLayout;
