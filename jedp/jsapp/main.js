/**
 * @author Administrator
 */
Ext.require(['*']);
Ext.QuickTips.init();
Ext.onReady(function() {
	var tabPL=Ext.create('Ext.tab.Panel', {
                region: 'center',
                items: [{
                    title: 'Close Me',
                    closable: true,
                    autoScroll: true
                }, {
                    title: 'Center Panel',
                    autoScroll: true
                }]
        });
         var viewport = Ext.create('Ext.Viewport', {
            id: 'border-example',
            layout: 'border',
            renderTo: Ext.getBody(),
            items: [{
            	 region: 'north',
            	 xtype: 'container',
            	 height:70
            },
            {
                region: 'west',
                split: true,
                height: 100,
                width:200,
                minSize: 100,
                maxSize: 200,
                collapsible: true,
                collapsed: false,
                title: '导航',
                margins: '0 0 0 0'
            },
            tabPL,
            {
            	region: 'south',
            	xtype: 'toolbar',
            	height: 20
            }
            ]});
});