import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
  'peer-connection-notification': {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    position: 'fixed',
    bottom: 5,
    transitionDuration: '0.5s',
    left: 'calc(50% - 175px)',
    textAlign: 'center',
    width: 350,
    height: 50,
    color: '#252525',
    background: 'white',
    border: '0.25px solid lightgray',
    borderRadius: 5,
  },
  'qr-container': {
    zIndex: 1000,
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    '& .open-modal': {
      background: 'none',
      backgroundColor: 'white',
      backgroundImage:
        " url('https://www.svgrepo.com/show/311122/qr-code.svg')",
      backgroundSize: 'contain',
      border: 0,
      position: 'fixed',
      right: 10,
      bottom: 10,
      height: 42,
      width: 42,
      transitionDuration: '0.1s',
      '&:hover': {
        cursor: 'pointer',
        opacity: 0.8,
      },
      '&:active': {
        transform: 'scale(0.9)',
        opacity: 0.5,
      },
    },
    '& .modal-back': {
      position: 'absolute',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      height: '100%',
      left: 0,
      top: 0,
      '& .modal': {
        width: 350,
        height: 360,
        backgroundColor: 'white',
        position: 'absolute',
        left: 'calc(50% - 175px)',
        top: 'calc(50% - 180px)',
        borderRadius: 7.5,
        '& a': {
          fontSize: 12,
          color: 'cornflowerblue',
          paddingLeft: 60,
        },
        '& .close-icon': {
          width: 20,
          height: 20,
          backgroundImage:
            "url('https://www.svgrepo.com/show/305186/close.svg')",
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.6,
          },
          '&:active': {
            opacity: 0.3,
            transform: 'scale(0.9)',
          },
        },
        '& .header': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 17.5,
          paddingRight: 17.5,
          height: 50,
          borderBottom: '0.25px solid lightgray',
        },
        '& .container': {
          paddingLeft: 17.5,
          fontSize: 12,
          color: 'gray',
        },
        '& .qr-container': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
};

export const { classes } = jss.createStyleSheet(styles).attach();
