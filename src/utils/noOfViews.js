export const noOfViews = (views) => {
  return Math.floor(views / 1000) === 0
    ? views
    : Math.floor(views / 1000000) === 0
    ? `${Math.floor(views / 1000)}K`
    : Math.floor(views / 1000000000) === 0
    ? `${Math.floor(views / 1000000)}M`
    : `${Math.floor(views / 1000000000)}B`;
};
