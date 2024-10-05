import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if(posts.length === 0) {
        return (
            <div className='w-full py-9 mt-32 mb-36 text-center'>
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                        <h1 className='text-2xl hover:text-gray-500'>
                            <Link
                            to="/login"
                            className="font-medium text-primary transition-all duration-200"
                            >
                            login to read posts.....
                            </Link>
                        </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-5/6 mx-10 sm:w-1/3 sm:mx-0 md:w-1/4 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home