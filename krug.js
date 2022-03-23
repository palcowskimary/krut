<style>
    .wrapper {
        position: relative;
        width: 112px;
        height: 130px;
        margin-bottom: 15px;
    }
    #dd {
        position: absolute;
        height: 130px !important;
    }
</style>
<script>
var width=112,r=1;

setTimeout('ff()', 100);
function ff() {
d=document.getElementById('dd');

if(d.width>2&&r==1){
	d.style.left=(parseInt(d.style.left)+1)+"px";
	d.width=d.width-2;
}else if(d.width<width&&r==0){
	d.style.left=(parseInt(d.style.left)-1)+"px";
	d.width=d.width+2;
}else {r=(r==1?0:1);}
setTimeout('ff()', 100);
}

</script>

<div class="wrapper">
    <img id="dd" src="images/logo1.png" style="left: 0;" alt="Вращение картинки">
</div>
