let posts=[
    {title:"first post" , body:"body of frst post" , createdAt:new Date()},
    {title:"second post" , body:"body of second post" , createdAt:new Date()}
  ]
  
  
  let intervalId ;
  
  function getPost(){
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
      let output ='';
      posts.forEach(post=>{
        output+=`<li>${post.title} and it was created ${(new Date() - post.createdAt )/1000} sec ago</li>`
      })
      document.body.innerHTML = output; 
    },1000)
  }
  
  function createPost(post){
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        posts.push({...post , createdAt: new Date()});
  
        let error = false ;
  
        if(!error){
          resolve("Added post succesfully");
        }else{
          reject("error  error")
        }
      },1000)  
    })
  }
  
  
  function deletePost(){
    return new Promise ((resolve , reject)=>{
      setTimeout(()=>{
        if(posts.length>0){
          resolve(posts.pop());
        }else{
         reject("Array is Empty Now");
        }
      },3000)
    })
  }

  async function init(){
   let msg = await createPost({title:"third post" , body:"body of third post" });
    getPost();
    console.log(msg);
  }

  ////created this outside init () function because we want to delete post seperately and not after creating post
  async function deletepost(){
    let msg = await deletePost();
    getPost();

    console.log(msg);
  }

  init();
  deletepost();