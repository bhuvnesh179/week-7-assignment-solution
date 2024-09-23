import { useState } from "react";
export default function Assignment1(){
    const [card, setCard] = useState({
        imgLink: "/cat.jpg",
        name: "Rita Correia",
        age: "32",
        country: "London",
        followers: "80K",
        likes: "803K",
        photos: "1.4K",
      });
    return (
        <div style={style.card}>
            
            <div style={style.header}>
            <div style={style.imageContainer}>
                    <img style={style.imageLink} src={card.imgLink} alt="Profile" />
            </div>
            </div>
            
            
       
        <div style={style.nameContainer}>
                    <span style={style.name}>{card.name}</span>
                    <span style={style.age}>{card.age}</span>
        </div>
       
        <div style={style.location}>{card.country}</div>

       
        <div style={style.statsContainer}>
                    <div style={style.statColumn}>
                        <div style={style.statValue}>{card.followers}</div>
                        <div style={style.statLabel}>Followers</div>
                    </div>
                    <div style={style.statColumn}>
                        <div style={style.statValue}>{card.likes}</div>
                        <div style={style.statLabel}>Likes</div>
                    </div>
                    <div style={style.statColumn}>
                        <div style={style.statValue}>{card.photos}</div>
                        <div style={style.statLabel}>Photos</div>
                    </div>
                </div>
                
        </div>
    )
}

const style = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        // padding: '10px',
        margin: '20px',
        maxWidth: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white'
        
    },
    
    header: {
        height: '125px',
        backgroundColor: '#40E0D0',
    },

    imageContainer: {
        display: 'flex',
        justifyContent: 'center',  
        // alignItems: 'center',  
        position: 'relative',   
      },

      imageLink: {
        height: '100px',
        width: '100px',           
        objectFit: 'cover',         
        borderRadius: '50%', 
        position: "absolute",
        top: '60px'
      },

      nameContainer: {
        marginTop: '50px',
        textAlign: 'center',
    },
    name: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    age: {
        color: 'grey',
        marginLeft: '5px',
    },
      location: {
        color: 'grey',
        textAlign: 'center',
        marginTop: '5px',
    },
    statsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid #e0e0e0',
        marginTop: '20px',
        padding: '10px',
        paddingTop: '20px',
    },
    statColumn: {
        textAlign: 'center',
    },
    statValue: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: '12px',
        color: 'grey',
    },
    }