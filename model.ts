export type TimerPayload = {
    id: number;
    duration: number;
    isRunning?: boolean;
}

export enum ServerEvent {
    ADDTIMER = 'addTimer',
    STARTTIMER = 'startTimer',
    STOPTIMER = 'stopTimer,',
    REMOVETIMER = 'removeTimer',
    SERVEREVENT = 'serverEvent'
}