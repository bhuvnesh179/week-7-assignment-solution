export default function Assignment2(){

    return (
        <>
        <div style={styles.buttons}>
            <button style={styles.red}  onClick={() => {
                document.body.style.backgroundColor = 'red';
            }}>Red</button>
            <button style={styles.yellow} onClick={() => {
                document.body.style.backgroundColor = 'yellow';
            }}>Yellow</button>
            <button style={styles.black} onClick={() => {
                document.body.style.backgroundColor = 'black';
            }}>Black</button>
            <button style={styles.purple} onClick={() => {
                document.body.style.backgroundColor = 'purple';
            }}>Purple</button>
            <button style={styles.green} onClick={() => {
                document.body.style.backgroundColor = 'green';
            }}>Green</button>
            <button style={styles.blue} onClick={() => {
                document.body.style.backgroundColor = 'blue';
            }}>Blue</button>
            <button style={styles.default} onClick={() => {
                document.body.style.backgroundColor = 'white';
            }}>Default</button>
        </div>
        </>
    )
}

const styles = {
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