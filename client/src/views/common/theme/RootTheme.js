import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export default () => {
    return createMuiTheme({
        palette: {
            type: 'dark',
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '*::-webkit-scrollbar': {
                        width: '0.4em'
                    },
                    '*::-webkit-scrollbar-track': {
                        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                        'background-color': '#212121',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgb(193, 193, 193)',
                        outline: '1px solid slategrey'
                    },
                }
            },
            MuiSnackbarContent: {
                root: {
                    color: 'white',
                },
            },
            MuiCardActionArea: {
                root: {
                    '&:hover $focusHighlight': {
                        opacity: 0,
                    }
                }
            },
            MuiAlert: {
                standardInfo: {
                    backgroundColor: '#ff9800',
                    color: '#fff',

                    '& $icon': {
                        color: '#fff'
                    }
                },
            },
            MuiCheckbox: {
                colorPrimary: {
                    color: '#ff9800',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 152, 0, 0.03)'
                    },

                    '&$checked': {
                        color: '#ff9800',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 152, 0, 0.03)'
                        },
                    }
                },
                checked: {}
            },
            MuiSwitch: {
                switchBase: {
                    color: 'rgb(193, 193, 193)',
                    '&$checked': {
                        color: '#ff9800',
                    },
                    '&$checked + $track': {
                        backgroundColor: '#ff9800',
                    },
                },
                checked: {},
                track: {},
            },


            // MuiInputLabel: {
            //     root: {
            //         color: "orange",
            //         "&$focused": {
            //             color: "red"
            //         }
            //     }
            // },
            // MuiOutlinedInput: {
            //     root: {
            //         '&$focused $notchedOutline': {
            //             borderColor: 'green',
            //             borderWidth: 1,
            //         },
            //     }
            // },
            // https://github.com/mui-org/material-ui/issues/13557
        }
    })
}
