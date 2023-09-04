*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #0A2528;
}

.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

h1{
    color: #FFF;
    font-family: Inter;
    font-size: 3.42rem;
    font-style: italic;
    font-weight: 600;
    margin-top: 2.94rem;
} 

input{
    width: 27.5rem;
    height: 2.4375rem;
    border-radius: 0.25rem;
    border: 1px solid #D6B7A2;
    background: rgba(217, 217, 217, 0.00);
    padding: 0 0.69rem ;
    color: #BDA492;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
}

button{
    width: 5.6875rem;
    height: 2.4375rem;
    border-radius: 0.25rem;
    background: #D6B7A2;
    border: none;
    color: #FFF;
    font-family: Inter;
    font-size: 1.06819rem;
    font-style: normal;
    font-weight: 700;
}

#table{
    width: 17.39731rem;
    height: 33.875rem;
    border-radius: 0.30656rem;
    border: 1.226px solid #D6B7A2;
    color: #FFF;
    font-family: Inter;
    font-size: 2.6em;
    font-style: italic;
    font-weight: 600;
    margin-top: 2.56rem;
    margin-bottom: 3.94rem;
} 

.all{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 700px) {
    input{
        width: 90%;
    }

    .up{
        display: flex;
        gap: 1rem;
    }

    h1{
        padding-top: 2rem;
    }

    #table{
        height: 31rem;
        margin-top: 1rem;
    }
}
