<template>
    <ul class="left-menu" id="LeftFunctionMenu">
        <li class="left-menu-btn" v-on:click="leftMenu">
            <i v-show="!systemSet.menuBtn" class="iconfont">&#xea07;</i>
            <i v-show="systemSet.menuBtn" class="iconfont">&#xea06;</i>
        </li>
        <li class="full-screen-btn-01"  id="backHome" v-on:click="backHome"
            >
            <i v-if="!systemSet.fullScreen" class="iconfont">&#xe95d;</i>
            <i v-if="systemSet.fullScreen" class="iconfont" style="color: rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7);">&#xe95d;</i>
        </li>
        <li class="full-screen-btn-01"  id="fullScreen" v-on:click="fullBtnClick">
            <i v-if="!systemSet.fullScreen" class="iconfont">&#xe904;</i>
            <i v-if="systemSet.fullScreen" class="iconfont" style="color: rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7);">&#xe905;</i>
        </li>
        <li class="mute-btn-01" v-on:click="muteBtnClick($event)">
            <i v-show="!systemSet.mute" class="iconfont" style="color: rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7);">&#xeca3;</i>
            <i v-show="systemSet.mute" class="iconfont">&#xeca3;</i>
        </li>
        <li class="lamp-btn-01" v-on:click="lampBtnClick($event)">
            <i v-if="systemSet.lamp" class="iconfont" style="color: rgba(188, 255, 235, 0.8);text-shadow: 0px 0px 21px rgba(85, 255, 85, 0.7);">&#xecd5;</i>
            <i v-if="!systemSet.lamp" class="iconfont">&#xecd5;</i>
        </li>
    </ul>
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

            }
        },
        computed:{

        },
        methods: {
            //返回首页按钮点击事件
            backHome: function () {
                window.location.href = '/'
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
                this.systemSet.menuBtn = !this.systemSet.menuBtn
                if (this.systemSet.menuBtn) {
                    menu.style.transform = 'translateX(0)';
                    var _this = this;
                    setTimeout(function () {
                        menu.style.transform = 'translateX(-41px)';
                        _this.systemSet.menuBtn = false;
                    }, 6000)
                } else {
                    menu.style.transform = 'translateX(-41px)';
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
        width: 40px;
        height: 120px;
        position: fixed;
        left: 0;
        z-index: 103;
        top: 80px;
        transition: all 0.4s linear;
        transform: translateX(-41px);
    }

    .left-menu li.left-menu-btn {
        display: block;
        position: absolute;
        top: 0;
        right: -31px;
        width: 30px !important;
        height: 39px !important;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 102;
        border-radius: 0 6px 6px 0;
        line-height: 39px;
        text-align: center;
        cursor: pointer;
        transition: all 0.4s linear;
        border-bottom: none !important;
    }

    .left-menu li.left-menu-btn .iconfont {
        color: rgba(255, 255, 255, 0.4);
    }

    .left-menu-btn .iconfont {
        font-size: 30px;
        color: rgba(255, 255, 255, 1);
        margin-left: -3px;
    }
    .left-menu li.left-menu-btn {
        position: absolute;
        top: 0;
        right: -31px;
        width: 30px !important;
        height: 39px !important;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 102;
        border-radius: 0 6px 6px 0;
        line-height: 39px;
        text-align: center;
        cursor: pointer;
        transition: all 0.4s linear;
        border-bottom: none !important;
    }
    .left-menu-btn .iconfont {
        font-size: 30px;
        color: rgba(255, 255, 255, 1);
        margin-left: -3px;
    }
    .left-menu .iconfont {
        transition: all 0.6s linear;
        color: rgba(255, 255, 255, 0.4);
        font-size: 24px;
    }
    .left-menu li {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        transition: all 0.4s linear;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>
