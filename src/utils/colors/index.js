const mainColors = {
    dark_main : '#112340',
    light_main : '#0BCAD4',

    grey1:'#7D8797',
    grey2:'#EDEEF0',
    grey3:'#B1B7C2',

    black1: 'rgba(0,0,0,0.5)',

    red1: '#E06379',

    green1 : '#2AC74E',
    
    blue1 : '#0BCAD4'
};

export const Colors = { 
    primary:mainColors.dark_main,
    secondary:mainColors.light_main,
    button:{
        primary:{
            background:mainColors.dark_main,
            text:'white'
        },
        secondary:{
            background:'white',
            text:mainColors.light_main
        },
        disable:{
            background:mainColors.grey2,
            text:mainColors.grey3
        }
    },
    text:{
        primary:mainColors.dark_main,
        secondary:mainColors.light_main,
    },
    border:mainColors.grey3,
    loadingBackground:mainColors.black1,
    error:mainColors.red1,
    success:mainColors.green1,
    mainColors:mainColors
};