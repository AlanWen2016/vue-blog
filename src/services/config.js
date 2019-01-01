let urlPrefix = '';
switch (document.location.hostname ) {
    case 'alanwen.com':
        urlPrefix = `${document.location.protocol}//alanwen.com${urlPrefix}`;
        break;
    case 'dev.alanwen.online':
        urlPrefix = `${document.location.protocol}//alanwen.com${urlPrefix}`;
        break;
    default:
        urlPrefix = `${document.location.protocol}//alanwen.com${urlPrefix}`;
}

export  {
    urlPrefix
};
