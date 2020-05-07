function Movie_OnStart(){
StackTrace="Al Iniciar";
SoundPlay("Star", true);
VideoSetVolume("Video",0);
SoundSetVolume("Star", 30);

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Pause();

}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.Al Hacer Clic";
GotoSceneName("Audio");
SoundPlay("Mlem", false);
}

function ToggleButton3_OnClick(){
StackTrace="ToggleButton3.Al Hacer Clic";
VideoSetVolume("Video",100);
SoundPlay("Mlem", false);
}

function ToggleButton3_OnRelease(){
StackTrace="ToggleButton3.Al Liberar";
VideoSetVolume("Video",0);
SoundPlay("Mlem", false);
}

function ToggleButton4_OnClick(){
StackTrace="ToggleButton4.Al Hacer Clic";
VideoPause("Video");
SoundPlay("Mlem", false);
}

function ToggleButton4_OnRelease(){
StackTrace="ToggleButton4.Al Liberar";
VideoResume("Video");
SoundPlay("Mlem", false);
}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.Al Hacer Clic";
GotoSceneName("Vídeo");
SoundPlay("Mlem", false);

}

function ToggleButton5_OnClick(){
StackTrace="ToggleButton5.Al Hacer Clic";
SoundPlay("Mlem", false);
SoundPause("Star");


}

function ToggleButton5_OnRelease(){
StackTrace="ToggleButton5.Al Liberar";
SoundResume("Star");
SoundPlay("Mlem", false);
}

function ToggleButton5_OnOut(){
StackTrace="ToggleButton5.Al Salir";


}

