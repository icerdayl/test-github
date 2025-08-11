
export const Object = [
      {
          name: "icerdayl",
          address: "Biringan",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PwVDYeWI90zcxf5a8P7wwFHfGd384tRWjQ&s",
          img:"https://plus.unsplash.com/premium_photo-1676422290431-f0d07a64eec5?q=80&w=482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          comments:{
              user: "Gusion Montefalco",
              comment: "Lesgoooo"
          }
      },
      {
          name: "ahiezer",
          address: "Alabama",
          icon: "https://thehowler.org/wp-content/uploads/2018/01/roll-safe-meme-1.jpg",
          img:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTkzeWloc3J6eGNvaTl2cmVoOWEzenZka2dhMTYydTBxandvc3VkbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7aTnQqygA3TcukFi/200.webp",
            comments:{
              user: "H2WO",
              comment: "i miss you tho"
          }
      },

      {
          name: "icer",
          address: "Bambang",
          icon: "https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png",
          img:"https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2ZyeGdsODV2dzY0ZHFqaXJ1ZzRjYmVuOHJzZnlhMnVwY2F1anEyOSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/h3WH1rqyW2bmfOVqSi/giphy.webp",
          comments:{
              user: "Lebron James",
              comment: "Fireeee"
          }
      },
  ]

export function popup(){
    document.getElementById("add-btn").addEventListener("click", function(){
            document.getElementById("popup").style.display= "block";
            document.getElementById("popup-bg").style.display= "block";
        })
        
    document.getElementById("popup-bg").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popup-bg").style.display = "none";
    })

    document.getElementById("close").addEventListener("click", function(){
        document.getElementById("popup").style.display = "none";
        document.getElementById("popup-bg").style.display = "none";
    })
}

