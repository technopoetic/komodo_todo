// Setup namespace
if (typeof(ko) == 'undefined') {
    var ko = {};
}
if (typeof(ko.extensions) == 'undefined') {
    ko.extensions = {};
}

// Make todo extension namespace and add our js code
ko.extensions.komodo_todo = {};

ko.logging.getLogger("komodo_todo").warn("Initializing JS file");
(function() {
    this.toggle_dialog = function () {
        var os = Components.classes['@activestate.com/koOs;1'].getService(Components.interfaces.koIOs);
        try {
            appdir = '/home/rhibbitts/Dropbox/todo/';
            var logFile = os.path.join(appdir,'todo.txt');
            var winOpts = "centerscreen,chrome,resizable,scrollbars,dialog=no,close";
            //window.openDialog('chrome://komodo_todo/content/komodo_todo_dialog.xul',"_blank",winOpts,logFile);
            ko.open.URI(logFile);
            //ko.open.filePicker();
        } catch(e) { alert(e); }
    }
    
}).apply(ko.extensions.komodo_todo);
    
    
