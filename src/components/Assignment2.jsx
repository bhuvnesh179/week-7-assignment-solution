import { useState } from "react";
export default function Assignment2(){
    const [backgroundColor, setBackgroundColor] = useState('white');
    return (
        <>
        <div style={{ ...styles.container, backgroundColor: backgroundColor }}>
        <div style={styles.buttons}>
            <button style={styles.red}  onClick={() => {
                setBackgroundColor('red')
            }}>Red</button>
            <button style={styles.yellow} onClick={() => {
                setBackgroundColor('yellow')
            }}>Yellow</button>
            <button style={styles.black} onClick={() => {
                setBackgroundColor('black')
            }}>Black</button>
            <button style={styles.purple} onClick={() => {
                setBackgroundColor('purple')
            }}>Purple</button>
            <button style={styles.green} onClick={() => {
              setBackgroundColor('green')
            }}>Green</button>
            <button style={styles.blue} onClick={() => {
               setBackgroundColor('blue')
            }}>Blue</button>
            <button style={styles.default} onClick={() => {
                setBackgroundColor('white')
            }}>Default</button>
        </div>
        </div>
        </>
    )
}

const styles = {
    container: {
        height: '100vh',  // Full viewport height
        width: '100vw',   // Full viewport width
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // transition: 'background-color 0.5s ease',  // Smooth color transition
    },
    buttons: {
        position: 'fixed',
        bottom: '10px',
        left: '450px',
        textAlign: "center",
        backgroundColor: "grey",
        borderRadius: '10px',
        // display: 'flex',
        // justifyContent: "space-between",
        // pointer: 'cursor'
    },
    red: {
        backgroundColor: 'red',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
    },
    yellow: {
        backgroundColor: 'yellow',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    },
    black: {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    },
    purple: {
        backgroundColor: 'purple',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    },
    green: {
        backgroundColor: 'green',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    },
    blue: {
        backgroundColor: 'blue',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    },
    default: {
        // backgroundColor: 'orange',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    },
   
}