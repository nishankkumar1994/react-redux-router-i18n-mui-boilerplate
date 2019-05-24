const styles = theme => ({
  root: {
    position: 'fixed',
    right: 0,
    top: 0,
    left: 0,
    zIndex: 2,
    boxShadow: 'none',
    borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.colors.commonBorder}`,
    padding: `${theme.typography.pxToRem(5)} ${theme.typography.pxToRem(30)}`,
  },
  formWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'top',
  },
  title: {
    marginRight: theme.typography.pxToRem(5),
    marginTop: theme.typography.pxToRem(5),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    color: '#272E41',
  },
});

export default styles;
