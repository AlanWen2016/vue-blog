let urlPrefix = '';
switch (document.location.hostname ) {
    case 'alanwen.com':
        urlPrefix = `${document.location.protocol}//alanwen.com${urlPrefix}`;
        break;
    case 'dev.alanwen.online':
        urlPrefix = `${document.location.protocol}//alanwen.online${urlPrefix}`;
        break;
    default:
        urlPrefix = `${document.location.protocol}//alanwen.online${urlPrefix}`;
}

export  {
    urlPrefix
};
