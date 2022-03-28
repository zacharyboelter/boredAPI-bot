let activity = document.getElementById('activity-name')
let btn = document.getElementById('btn-get-activity')



btn.addEventListener('click', function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        activity.textContent = data.activity
    })
})

