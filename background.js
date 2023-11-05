var c=0
var b=0
    chrome.tabs.onHighlighted.addListener(async(tabId, tab) => {
        var site_list=[]
        chrome.storage.sync.get(["key"]).then((result) => {
          console.log(result.key)
            
            if (result.key!=undefined && result.key.length!=0){
            site_list=result.key
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
        //.getElementById('btn').style.display='none'
        x+=1
    
      }}
      if (currenturl.includes('.live')){
        if(currenturl.split('.live')[0].includes(item)){
          console.log(currenturl,item)
          //.getElementById('btn').style.display='none'
          x+=1
    
        }}
      if (currenturl.includes('.in')){
        if(currenturl.split('.in')[0].includes(item)){
          console.log(currenturl,item)
          //.getElementById('btn').style.display='none'
          x+=1
        }}
      if (currenturl.includes('.sex')){
        if(currenturl.split('.sex')[0].includes(item)){
          console.log(currenturl,item)
          //.getElementById('btn').style.display='none'
          x+=1
        }}
      if (currenturl.includes('.org')){
        if(currenturl.split('.org')[0].includes(item)){
          console.log(currenturl,item)
          //.getElementById('btn').style.display='none'
          x+=1
        }}
      if (currenturl.includes('.us')){
        if(currenturl.split('.us')[0].includes(item)){
          console.log(currenturl,item)
          //.getElementById('btn').style.display='none'
          x+=1
        }}
        if(x==0){
            //.getElementById('btn').style.display='block'
            //.getElementById('remove').style.display='none'
          }else{
              //.getElementById('remove').style.display='block'
              c+=1
              console.log(c)
            

              mess(c)
              
                
            }
    })

    })
      
        })

    })

function mess(c){
    
    var msg="padh le jaa ke izzat se"
    if(c==1){
      var msg="padhle Bsdke"
      chrome.windows.create({
        url: 'messages/1.html',
        type: 'popup', width: 1000, height: 1000,
    });
    }
    if(c>2 && c<5){
      var msg='Behachod chutiya hai kya padh le'
      chrome.windows.create({
        url: 'messages/2.html',
        type: 'popup', width: 1000, height: 1000,
    });

    }
    if(c>5 && c>9){
      var msg="abe o jhatu baad mein pachtayega padh le"
      chrome.windows.create({
        url: 'messages/3.html',
        type: 'popup', width: 1000, height: 1000,
    });
    }
    if(c>9 && c<12){
      var msg="rahega toh tu bkl lowlife hi behanchod jaa ke padh le chu chaap"
      chrome.windows.create({
        url: 'messages/4.html',
        type: 'popup', width: 1000, height: 1000,
    });
    
    }
    if(c==15){
      chrome.windows.create({
        url: 'messages/5.html',
        type: 'popup', width: 2000, height: 2000,
    });
     }
    console.log(msg,'msssssssssg')
    if(c<1){
    chrome.notifications.create(
      'k',
      {
        type: "basic",
        iconUrl: "padhle.jpeg",
        title: "PadhleBsdke",
        message: msg,
      },
    );
    }else{
      chrome.notifications.update(
        'k',
        {
          type: "basic",
          iconUrl: "padhle.jpeg",
          title: "PadhleBsdke",
          message: msg,
        },
      );
    }
  }









  chrome.tabs.onUpdated.addListener(async(tabId, tab) => {
  var site_list=[]
  chrome.storage.sync.get(["key"]).then((result) => {
    console.log(result.key)
      
      if (result.key!=undefined && result.key.length!=0){
      site_list=result.key
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
  //.getElementById('btn').style.display='none'
  x+=1

}}
if (currenturl.includes('.live')){
  if(currenturl.split('.live')[0].includes(item)){
    console.log(currenturl,item)
    //.getElementById('btn').style.display='none'
    x+=1

  }}
if (currenturl.includes('.in')){
  if(currenturl.split('.in')[0].includes(item)){
    console.log(currenturl,item)
    //.getElementById('btn').style.display='none'
    x+=1
  }}
if (currenturl.includes('.sex')){
  if(currenturl.split('.sex')[0].includes(item)){
    console.log(currenturl,item)
    //.getElementById('btn').style.display='none'
    x+=1
  }}
if (currenturl.includes('.org')){
  if(currenturl.split('.org')[0].includes(item)){
    console.log(currenturl,item)
    //.getElementById('btn').style.display='none'
    x+=1
  }}
if (currenturl.includes('.us')){
  if(currenturl.split('.us')[0].includes(item)){
    console.log(currenturl,item)
    //.getElementById('btn').style.display='none'
    x+=1
  }}
  if(x==0){
      //.getElementById('btn').style.display='block'
      //.getElementById('remove').style.display='none'
    }else{
        //.getElementById('remove').style.display='block'
        b+=1
        console.log(b,'background')
        mess(b);message(b)
        
          
      }
})

})

  })
})


function message(c){

  var msg="padh le jaa ke izzat se"
  if(c==1){
    var msg="padhle Bsdke"
    chrome.windows.create({
      url: 'messages/1.html',
      type: 'popup', width: 1000, height: 1000,
  });
  }
  if(c>2 && c<5){
    var msg='Behachod chutiya hai kya padh le'

  }
  if(c>5 && c>9){
    var msg="abe o jhatu baad mein pachtayega padh le"
  }
  if(c>9 && c<12){
    var msg="rahega toh tu bkl lowlife hi behanchod jaa ke padh le chu chaap"

  
  }
  console.log(msg,'msssssssssg')
  if(c<1){
  chrome.notifications.create(
    'k',
    {
      type: "basic",
      iconUrl: "add.png",
      title: "PadhleBsdke",
      message: msg,
    },
  );
  }else{
    chrome.notifications.create(
      'k',
      {
        type: "basic",
        iconUrl: "add.png",
        title: "PadhleBsdke",
        message: msg,
      },
    );
  }


}
