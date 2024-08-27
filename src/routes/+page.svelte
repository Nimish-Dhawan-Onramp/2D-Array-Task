<script>
    let arr = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]
    ];
    let click=[[false,false,false],
               [false,false,false],
               [false,false,false]];
    let position = [];
    const handleClick1 = (pos) => {
        
        const { i, j } = pos;
        if(click[i][j]===false)
        {
            position.unshift(pos);
            position = position;
            click[i][j]=true;
            arr[i][j] = 1 - arr[i][j];
        }

        console.log(position);
    };
    function task(position)
    {
            if(position.length>0)
            {
                const ele = position.pop();
                const { i, j } = ele;
                console.log(ele);
                arr[i][j] = 1 - arr[i][j];
                click[i][j]=false;
            }

    }
    const handleClick2 = (position) => {

        for (let i = position.length-1; i >=0; i--){
            setTimeout(()=>{task(position)},1000*i);
        }
    };
</script>
<div>
<center><h1>2D Array Task</h1></center>
<body>
    <div class=container>
        <section class="whole">
            <div>
                {#each arr as row, i}
                    <div class="row">
                        {#each row as ele, j}
                            <button
                                class={ele===1?'ele dark':'ele bright'}
                                on:click={() => {
                                    handleClick1({ i, j });
                                }}
                            >
                                {ele}
                            </button>
                        {/each}
                    </div>
        
                    <br />
                {/each}
            </div>
            <button class ="rep" on:click={()=>handleClick2(position)}>Replay</button>
        </section>
        </div>
</body>
</div>
<style>
body {
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    padding: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section.whole {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row {
    display: grid;
    grid-template-columns: auto auto auto; 
    gap: 15px; 
}

.ele {
    width: 80px; 
    height: 80px; 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 3px; 
    font-size: 24px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.ele.dark {
    background-color: #0056b3;
    color: white;
}

.ele.bright {
    background-color: #00c4cc;
    color: #333;
}

.ele:hover {
    background-color: #b3b3b3;
    transform: scale(1.05);
}

.rep {
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px; 
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 20px;
}

.rep:hover {
    background-color: #45a049;
    transform: scale(1.05);
}
</style>