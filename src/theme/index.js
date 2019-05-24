const fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;

const pxToRem = size => `${(size / htmlFontSize) * coef}rem`;

export default {
  spacing: {
    unit: 10,
  },
  typography: {
    pxToRem,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 10,
    useNextVariants: true,
    captionNext: {
      color: '#6D727F',
    },
    subtitle2: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#2a55c4',
      contrastText: '#EEEEEE',
    },
    secondary: {
      main: '#0289FF',
    },
  },
  colors: {
    blackText: '#272E41',
    error: '#AAB0B5',
    errorColor: '#f24242',
    white: '#ffffff',
    black: '#000000',
    focusedBackground: '#EEEEEE',
    focusedInput: '#f5f6fA',
    tableSearchInput: '#6D727F',
    tableBackground: '#e5e7f0',
    tableBorder: '#A4A8B6',
    tableCheckboxBorder: '#6D727F',
    commonBorder: 'rgba(164, 168, 182, 0.5)',
  },
  overrides: {
    MuiTableRow: {
      root: {
        display: 'flex',
        height: 'auto',
        '&$hover:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.07)',
        },
        '&$selected': {
          backgroundColor: '#e5f3ff',
        },
      },
      head: {
        height: 'auto',
      },
    },
    MuiTableCell: {
      root: {
        flex: 1,
        padding: `${pxToRem(6)} ${pxToRem(9)}`,
        borderLeft: `${pxToRem(1)} solid rgba(0, 0, 0, 0.12)`,
      },
      body: {
        color: '#777',
      },
      head: {
        color: '#000',
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
      },
      paddingCheckbox: {
        flex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: pxToRem(45),
      },
    },
    MuiFormControl: {
      root: {
        marginLeft: pxToRem(7),
        marginRight: pxToRem(7),
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: pxToRem(18.5),
      },
    },
    MuiInputAdornment: {
      root: {
        color: 'rgba(0, 0, 0, 0.54)',
      },
      positionEnd: {
        marginLeft: pxToRem(8),
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: `translate(0.45rem, ${pxToRem(7)}) scale(1)`,
        '&$shrink': {
          transform: 'translate(0.75rem, -0.25rem) scale(.8)',
          background: 'transparent',
        },
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: pxToRem(1),
        borderRadius: pxToRem(4),
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#0289FF',
        },
      },
      input: {
        padding: pxToRem(6.5),
      },
      adornedEnd: {
        paddingRight: pxToRem(5),
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        display: 'none',
      },
    },
    MuiPickersCalendar: {
      transitionContainer: {
        minHeight: pxToRem(206),
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        paddingTop: pxToRem(6),
        marginRight: pxToRem(4),
        marginLeft: pxToRem(4),
        marginBottom: pxToRem(8),
        marginTop: pxToRem(8),
      },
      daysHeader: {
        maxHeight: pxToRem(24),
      },
      dayLabel: {
        color: '#272E41',
        fontWeight: 'bold',
        width: pxToRem(36),
        fontSize: pxToRem(12),
        margin: `0 ${pxToRem(2)}`,
      },
    },
    MuiPickersDay: {
      day: {
        fontSize: pxToRem(12),
        width: pxToRem(34),
        height: pxToRem(34),
        margin: `0 ${pxToRem(2)}`,
        color: '#272E41',
      },
      hidden: {
        color: 'rgba(0, 0, 0, 0.38)',
        opacity: 1,
      },
      isSelected: {
        backgroundColor: '#0289FF',
        borderRadius: 0,
      },
      current: {
        color: '#2a55c4',
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#2a55c4',
      },
    },
    MuiExpansionPanel: {
      expanded: {
        margin: 0,
      },
      root: {
        boxShadow: 'none',
        borderBottom: `${pxToRem(1)} solid rgba(0, 0, 0, 0.12)`,
        '&:before': {
          content: 'none',
        },
      },
      rounded: {
        '&:last-child': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: '2px solid #0289FF',
        },
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: `0 ${pxToRem(12)}`,
        minHeight: pxToRem(52),
        '&+div': {
          visibility: 'hidden',
        },
        '&$expanded': {
          minHeight: pxToRem(52),
          '&+div': {
            visibility: 'visible',
          },
        },
      },
      content: {
        margin: `${pxToRem(12)} 0 ${pxToRem(8)}`,

        '&$expanded': {
          margin: `${pxToRem(12)} 0 ${pxToRem(8)}`,
        },
      },
      expandIcon: {
        '&$expanded': {
          transform: 'translateY(-50%) rotate(90deg)',
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        display: 'block',
        padding: `${pxToRem(8)} ${pxToRem(12)}`,
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiCheckbox: {
      root: {
        marginRight: pxToRem(4),
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: pxToRem(12),
      },
    },
    MuiInputBase: {
      root: {
        fontSize: pxToRem(12),
      },
    },
    MuiFormHelperText: {
      contained: {
        margin: 0,
        backgroundColor: 'white',
        borderRadius: pxToRem(3),
        padding: `${pxToRem(6)} ${pxToRem(8)}`,
        position: 'absolute',
        color: '#f24242',
        top: '100%',
        width: '100%',
        fontSize: pxToRem(10),
      },
    },
    label: {
      '+ formControl': {
        marginTop: pxToRem(16),
      },
    },
    MuiListItem: {
      default: {
        borderLeft: `${pxToRem(2)} solid transparent`,
        '&$selected': {
          borderLeft: '0.125rem solid #2a55c4',
        },
      },
    },
    MuiPopover: {
      paper: {
        minWidth: pxToRem(290),
      },
    },
    MuiSelect: {
      selectMenu: {
        paddingRight: pxToRem(32),
        paddingTop: pxToRem(7),
        paddingBottom: pxToRem(6),
      },
    },
  },
};
