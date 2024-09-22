import React from 'react'
import "./HomeScreen.css"
import Navbar from "../Nav"
import Banner from "../Banner"
import Rows from "../Rows"
import requests from '../Requests'
function HomeScreen() {
    return (
        <div className=''>

            {/* Nav */}
            <Navbar />

            {/* Banner */}
            <Banner />

            {/* Rows */}
            <Rows
                title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Rows
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow={false}
            />
            <Rows
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow
            />
            <Rows
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
                isLargeRow
            />
            <Rows
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
                isLargeRow={false}
            />
            <Rows
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow
            />

            <Rows
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow
            />
            <Rows
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow
            />


        </div>
    )
}

export default HomeScreen