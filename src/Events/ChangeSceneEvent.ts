/**
 * Created by xiashishi on 15/9/24.
 */
class ChangeSceneEvent extends egret.Event
{
    public static CHANGE_SCENE_EVENT: string = "changesceneevent";
    public static TUICHU: string = "alltuichu";
    public eventType:any;//事件类型
    public obj: any;//对象
    public str: string;//字符串
    public data: any;//字符串
    public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false){
        super(type,bubbles,cancelable);

    }
}