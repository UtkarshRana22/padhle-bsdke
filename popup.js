var c=
document.addEventListener("DOMContentLoaded",async()=>{
    var site_list=[]
    chrome.storage.sync.get(["key"]).then((result) => {
      console.log(result.key)
        
        if (result.key!=undefined && result.key.length!=0){
        site_list=result.key
        }else{
          document.getElementById('delbtn').style.display='none'
        }
      
      console.log(site_list,'list')
var currenturl=''
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
currenturl=tabs[0].url


console.log(currenturl,'cureeeee')
var x=0
site_list.forEach((item)=>{
  
if (currenturl.includes('.com')){
  if(currenturl.split('.com')[0].includes(item)){
    console.log(currenturl,item)
    document.getElementById('btn').style.display='none'
    x+=1

  }}
  if (currenturl.includes('.live')){
    if(currenturl.split('.live')[0].includes(item)){
      console.log(currenturl,item)
      document.getElementById('btn').style.display='none'
      x+=1

    }}
  if (currenturl.includes('.in')){
    if(currenturl.split('.in')[0].includes(item)){
      console.log(currenturl,item)
      document.getElementById('btn').style.display='none'
      x+=1
    }}
  if (currenturl.includes('.sex')){
    if(currenturl.split('.sex')[0].includes(item)){
      console.log(currenturl,item)
      document.getElementById('btn').style.display='none'
      x+=1
    }}
  if (currenturl.includes('.org')){
    if(currenturl.split('.org')[0].includes(item)){
      console.log(currenturl,item)
      document.getElementById('btn').style.display='none'
      x+=1
    }}
  if (currenturl.includes('.us')){
    if(currenturl.split('.us')[0].includes(item)){
      console.log(currenturl,item)
      document.getElementById('btn').style.display='none'
      x+=1
    }}
    if(x==0){
      document.getElementById('btn').style.display='block'
      document.getElementById('remove').style.display='none'
      }else{
        document.getElementById('remove').style.display='block'

      }
})
})

//btn
document.getElementById('btn').addEventListener('click', function() {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
var url=tabs[0].url
if (url.includes('.com')){
url=url.split('.com')[0]
}
if (url.includes('.live')){
  url=url.split('.live')[0]
}       
if (url.includes('.in')){
  url=url.split('.in')[0]
}
if (url.includes('.sex')){
  url=url.split('.sex')[0]
}
if (url.includes('.org')){
  url=url.split('.org')[0]
}
if (url.includes('.us')){
  url=url.split('.us')[0]
}
site_list.push(url)
console.log(site_list)
        chrome.storage.sync.set({ key: site_list}).then(() => {
            
            console.log("Value is set");
          });
        });
        chrome.tabs.reload()  
        window.close()   
})
});

//btn



//delbtn
document.getElementById('delbtn').addEventListener('click', function() {

  chrome.storage.sync.clear()
  chrome.tabs.reload()
  window.close()
})


//delbtn

//removebtn
document.getElementById('remove').addEventListener('click', function() {
  
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var url=tabs[0].url
    if (url.includes('.com')){
    url=url.split('.com')[0]
    }
    if (url.includes('.live')){
      url=url.split('.live')[0]
    }       
    if (url.includes('.in')){
      url=url.split('.in')[0]
    }
    if (url.includes('.sex')){
      url=url.split('.sex')[0]
    }
    if (url.includes('.org')){
      url=url.split('.org')[0]
    }
    if (url.includes('.us')){
      url=url.split('.us')[0]
    }
    site_list.splice(site_list.indexOf(url),1)
    chrome.storage.sync.set({ key: site_list}).then(() => {
            
      console.log("Value is modified");
    });
    chrome.tabs.reload()
    window.close()

  })

})



//removebtn

})



