const counters = document.querySelectorAll('.count');

const handleCouter = (lastValue,counter)=>{
    let count = 0;
    
    const id = setInterval(()=>{
        count++;

        counter.textContent = count;

        if(count == lastValue)
        {
            clearInterval(id);
        }

    },100);
}

// handleCouter(counters.textContent);
// counters.textContent = 0

counters.forEach((counter)=>{
    handleCouter(counter.textContent,counter);
    counter.textContent = 0
})