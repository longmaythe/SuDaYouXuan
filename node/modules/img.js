class ImgLoadClass {
    static preloadImages = (arr) => {
      //已经加载完的图片数量
      let loadeImage = 0
      //存放图片的数组
      let newImages = []
      //处理存入字符串，取得src部分
      //let arr = str.match(/src="(.+)"\s{1}/g)
   
      //返回一个promise对像
      return new Promise((resolve,reject)=>{
        for (let i=0;i < arr.length;i++){
          for(let i = 0; i < arr.length; i++){
            newImages[i] = new Image()
            //设置图片src属性
            //newImages[i].src = arr[i].slice(5,-2)
            newImages[i].src = arr[i]
            //图片绑定onload事件，确保加载完成
            newImages[i].onload = ()=>{
              loadeImage++
              //当全部加载完成后，resove
              if(loadeImage === arr.length){
                resolve()
              }
            }
            newImages[i].onerror = ()=> {
              reject()
            }
          }
        }
      })
    }
   
  }