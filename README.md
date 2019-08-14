# liri-node-app

# Goal

The goal of the Liri app is to create four seperate functions that can be called from the Command Line for different tasks. The functions are as follows:
  
   1) "spotify-this" If you select this function and include the name of an artist, it will return their name, a preview of         their album, and a name of the track.
   2) "movie-this" If you select this function and include the name of a movie, it will return the title, year of release,            IMDB rating, movie rating (PG-13), the country it's from, the language, a brief plot description, and list of actors
   3) "concert-this" If you select this function and include the name of an artist, it will return the name of a venue, the         city the venue is in, and the date of the show (it returns data for five separate shows)
   4) "random-this" If you select this function, it will read the "random.txt" file and check which function was selected and        which song or artist was selected
   
# Examples

Each function has two pictures below. The first picture is what the function input looks like in the command line itself, while the second picture is what that command returns based on the inputs for each function.

## spotify-this

For this example I used the hip-hop group Migos. It runs the function 5 times, and the "null" response for four of them is due to the lack of available spotify preview URL for those tracks.

![alt text](https://i.imgur.com/XlWCH5O.jpg)


![alt text](https://i.imgur.com/JNvPxCw.jpg)



## movie-this

For this example I used the film "Interstellar". This function only runs one time and returns data for that first result.

![alt text](https://i.imgur.com/5f7gVG4.jpg)

![alt text](https://i.imgur.com/FiCSRDw.jpg)



## concert-this

For this example I used the hip-hop artist Post Malone, who I knew had some upcoming shows. Like spotify-this, it runs five times and returns the first five results.

![alt text](https://i.imgur.com/Vye2f6x.jpg)

![alt text](https://i.imgur.com/pqFLy7d.jpg)



## random-this

For this example, the random.txt file is pictured below. It includes the "spotify-this" function selection, as well as a string for the song "I Want It That Way". Because this is only a song title, it returns information for several different artists that have a song with this title

![alt text](https://i.imgur.com/3muFXpg.jpg)

![alt text](https://i.imgur.com/40Q1jq9.jpg)

![alt text](https://i.imgur.com/BUMndYR.jpg)

