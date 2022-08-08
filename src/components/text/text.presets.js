import Theme from "../../theme"

const base = {
  fontFamily: Theme.typography.primary,
  fontSize: 11
}
const baseMedium = {
  fontFamily: Theme.typography.primaryMedium,
  fontSize: 11
}
const baseBold = {
  fontFamily: Theme.typography.primaryBold
}
const textPresets = {
  p: {
    ...baseMedium,
  },
  small: {
    ...base,
  },
  strong: {
    ...baseMedium,
  },
  h1: {
    ...baseBold,
    fontSize: 20
  },
  h2: {
    ...baseBold,
    fontSize: 18
  },
  h3: {
    ...baseBold,
    fontSize: 16
  },
  h4: {
    ...baseBold,
  },
  h5: {
    ...baseBold,
  },
  h6: {
    ...baseBold,
  }
}

export default textPresets