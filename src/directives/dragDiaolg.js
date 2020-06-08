import Vue from 'vue'
Vue.directive("dragDialog",{
    bind:function(el,binding,vnode){
        const dialogHeaderDom = el.querySelector(".el-dialog__header")
        const dragDom = el.querySelector(".el-dialog")
        const parentNode = dragDom.parentNode
        dialogHeaderDom.style.cursor = "move"

        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        // const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
        dialogHeaderDom.onmousedown = function(event){
            let isMove = false
            const posX = event.clientX - dragDom.offsetLeft
            const posY = event.clientY - dragDom.offsetTop
            const dragWidth = dragDom.clientWidth
            const dragHeight = dragDom.clientHeight

            var tempNode = document.createElement('div');
            tempNode.style.backgroundColor = "transparent"
            tempNode.style.border = "2px dotted #ccc"
            tempNode.style.height = dragHeight-4+'px'
            tempNode.style.width = dragWidth-4+'px'
            tempNode.style.position = 'absolute'
            tempNode.style.top = dragDom.offsetTop+'px'
            tempNode.style.left = dragDom.offsetLeft+'px'
            document.onmousemove = function(event){
                parentNode.appendChild(tempNode)
                isMove = true
                const marginX = event.clientX - posX
                const marginY = event.clientY - posY
                if(marginX<0){
                    tempNode.style.left = '0px'
                }else if(marginX >=  document.body.clientWidth - dragWidth){
                    tempNode.style.left =  document.body.clientWidth - dragWidth +'px'
                }else{
                    tempNode.style.left = marginX+'px'
                }

                if(marginY<0){
                    tempNode.style.top = '0px'
                }else if(marginY >= document.body.clientHeight - dragHeight){
                    tempNode.style.top = document.body.clientHeight - dragHeight+'px'
                }else{
                    tempNode.style.top = marginY+'px'
                }
            }

            document.onmouseup = function(){
                dragDom.style.margin = "0"
                dragDom.style.top = tempNode.style.top
                dragDom.style.left = tempNode.style.left
                if(isMove){
                    parentNode.removeChild(parentNode.childNodes[1])
                    isMove = false
                }
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
})