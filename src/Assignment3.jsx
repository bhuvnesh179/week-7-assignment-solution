import { useEffect, useState } from "react";
import axios from "axios";

export default function Assignment3(){
    const [profile, setProfile] = useState([]);

    useEffect( () => {

        //fetch request
        // fetch("https://api.github.com/users/bhuvnesh179")
        // .then(async function(res){
        //     const response = await res.json();
        //     setprofile(response);
        // })
        // axios
        axios.get("https://api.github.com/users/bhuvnesh179")
        .then(function(res){
            setProfile(res.data)
        })
    },[])

    return (
        <>
        <div>UserData:-</div>
        <div>----------</div>
        <div>login:- {profile.login}</div>
        <div>id:- {profile.id}</div>
        <div>followers:- {profile.followers}</div>
        <div>following: {profile.following}</div>
        <div>name: {profile.name}</div>
        <div>location: {profile.location}</div>
        <div>twitter_handler:- {profile.twitter_username}</div>
        <div>pulic_repos:- {profile.public_repos}</div>
        </>
    )
}