import React from 'react'
import GalleryListView from "../Views/GalleryListView"
import NavigationBar from "../Shared/NavigationBar"
import BlogInterface from "../Shared/BlogInterface"

const PhotoGallery = () => {
    return (
        <div>
            <NavigationBar />
            <h1>Photo Gallery Page Present</h1>
            <GalleryListView />
            <BlogInterface />
            
        </div>
    )
}

export default PhotoGallery
