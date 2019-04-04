<template>
    <div class="left-menu" id="LeftFunctionMenu">
        <div class="left-menu-btn" v-on:click="leftMenu">
                <i class="fa fa-list" :style="systemSet.menuBtn?'color: rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7)':''"></i>
        </div>
        <transition tag="ul" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
            <ul v-if="show" class="left-menu-body">
                <li class="full-screen-btn-01"  id="backHome" v-on:click="backHome">
                    <i class="fa fa-home" :style="systemSet.fullScreen?'color:rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7)':''"></i>
                    返回首页
                </li>
            
                <li class="full-screen-btn-01"  id="fullScreen" v-on:click="fullBtnClick">
                    <i class="fa fa-arrows-alt" :style="systemSet.fullScreen?'color: rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7)':''"></i>
                </li>
                <li class="mute-btn-01" v-on:click="muteBtnClick($event)">
                    <i class="fa fa-camera-retro" :style="!systemSet.mute?'color:rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7)':''"></i>
                </li>
                <li class="lamp-btn-01" v-on:click="lampBtnClick($event)">
                    <i class="fa fa-camera-retro" :style="systemSet.lamp?'color: rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7)':''"></i>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'left-function-menu',
        data: () => {
            return {
                systemSet: {            //设置功能状态
                    menuBtn: false,         //菜单按钮  false:隐藏状态     true:显示状态
                    fullScreen: false,      //是否全屏  false:非全屏       true:全屏
                    mute: false,            //是否静音  false:未静音       true:已静音
                    lamp: false,             //主题切换  false:dark         true:light
                },
                //是否显示按钮
                show:false
            }
        },
        computed:{

        },
        methods: {
            //返回首页按钮点击事件
            backHome: function () {
                this.$router.push('/');

            },
            launchFullscreen: function (el) {
                /*判断是否全屏*/
                var isFullscreen = document.fullScreenElement //W3C
                    ||
                    document.msFullscreenElement //IE11
                    ||
                    document.mozFullScreenElement //火狐
                    ||
                    document.webkitFullscreenElement //谷歌
                    ||
                    false;
                if (!isFullscreen) {
                    if (el.requestFullscreen) {
                        el.requestFullscreen();
                    } else if (el.mozRequestFullScreen) {
                        el.mozRequestFullScreen();
                    } else if (el.webkitRequestFullscreen) {
                        el.webkitRequestFullscreen();
                    } else if (el.msRequestFullscreen) {
                        el.msRequestFullscreen();
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            },
            leftMenu: function () { //菜单按钮点击事件
                let menu = document.getElementsByClassName('left-menu')[0];
                this.show=!this.show;
                this.systemSet.menuBtn = !this.systemSet.menuBtn
                if (this.systemSet.menuBtn) {
                    //menu.style.transform = 'translateX(0)';
                    var _this = this;
                    setTimeout(function () {
                        _this.systemSet.menuBtn = false;
                        _this.show=false;
                    }, 6000)
                } else {
                    this.systemSet.menuBtn = false;
                }
            },
         
            //全屏按钮点击事件
            fullBtnClick: function () {
                this.launchFullscreen(document.documentElement);
                this.systemSet.fullScreen = !this.systemSet.fullScreen;
            },
        
            muteBtnClick: function (event) { //静音按钮点击事件
                this.systemSet.mute = !this.systemSet.mute;

                var audios = document.getElementsByTagName('audio');
                for (var i = 0; i < audios.length; i++) {
                    audios[i].muted = this.systemSet.mute;
                }
            },
           
            lampBtnClick: function () { //主题按钮点击事件
                this.systemSet.lamp = !this.systemSet.lamp;
                this.$emit('transmitlamp', this.systemSet.lamp)

                if (this.systemSet.lamp) { //当前状态：亮灯
                    $('body').removeClass('dark').addClass('white')
                } else { //当前状态：关灯
                    $('body').removeClass('white').addClass('dark')
                }
            }
            /*设置按钮事件群 END*/
        }
    }
</script>
<style>
    .left-menu {
        width: auto;
        height: 100%;
        position: fixed;
        left: 0;
        z-index: 103;
        top: 0;
    }
    .left-menu .left-menu-body{
        width:auto;
        height: 100%;
        padding: 0;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.9);
        transition: all 0.4s linear; 
    }
    .left-menu .left-menu-btn {
        display: block;
        position: absolute;
        top:40px;
        right:-40px;
        width: 40px !important;
        height: 40px !important;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 102;
        border-radius:0 6px 6px 0;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        border-bottom: none !important;
        transition: all 0.6s linear; 
    }

    .left-menu .left-menu-btn .fa {
        color: rgba(255, 255, 255, 0.4);
    }

    .left-menu-btn .fa {
        font-size: 24px;
        color: rgba(255, 255, 255, 1);
        margin-left: -3px;
    }
    
    .left-menu .fa {
        transition: all 0.6s linear;
        color: rgba(255, 255, 255, 0.4);
        font-size: 24px;
    }
    .left-menu li {
        box-sizing: border-box;
        display: block;
        width: 240px;
        height: 40px;
        padding-left: 20px;
        line-height: 40px;
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        transition: all 0.4s linear;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>
