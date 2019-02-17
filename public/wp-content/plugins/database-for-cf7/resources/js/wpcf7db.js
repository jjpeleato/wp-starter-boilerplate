( function( $ ) {
    $( '#wpcf7db-table tfoot td' ).each( function () {
        $( this ).html( '<input type="text" class="large-text" />' );
    } );

    var table = $( '#wpcf7db-table' ).DataTable( {
        'dom': '<"clearfix"B><"heading clearfix"lf><t><"heading clearfix"ip>',
        'pagingType': 'full_numbers',
        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
        'language': {
            'url': parameters.url + '/libs/datatables/i18n/' + parameters.lang + '.json'
        },
        'buttons': [
            {
                'text': function ( dt ) {
                    return dt.i18n( 'buttons.sExport', 'Export' );
                },
                'extend': 'collection',
                'buttons': [
                    {
                        'text': function ( dt ) {
                            return dt.i18n( 'buttons.sCopy', 'Copy' );
                        },
                        'extend': 'collection',
                        'buttons': [
                            {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sAll', 'All' );
                                },
                                'extend': 'copyHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                }
                            }, {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sSelection', 'Selection' );
                                },
                                'extend': 'copyHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                    'modifier': {
                                        'selected': true
                                    }
                                }
                            }
                        ]
                    }, {
                        'text': function ( dt ) {
                            return dt.i18n( 'buttons.sExcel', 'Excel' );
                        },
                        'extend': 'collection',
                        'buttons': [
                            {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sAll', 'All' );
                                },
                                'extend': 'excelHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                }
                            }, {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sSelection', 'Selection' );
                                },
                                'extend': 'excelHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                    'modifier': {
                                        'selected': true
                                    }
                                }
                            }
                        ]
                    }, {
                        'text': function ( dt ) {
                            return dt.i18n( 'buttons.sCsv', 'Csv' );
                        },
                        'extend': 'collection',
                        'buttons': [
                            {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sAll', 'All' );
                                },
                                'extend': 'csvHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                }
                            }, {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sSelection', 'Selection' );
                                },
                                'extend': 'csvHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                    'modifier': {
                                        'selected': true
                                    }
                                }
                            }
                        ]
                    }, {
                        'text': function ( dt ) {
                            return dt.i18n( 'buttons.sPdf', 'Pdf' );
                        },
                        'extend': 'collection',
                        'buttons': [
                            {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sAll', 'All' );
                                },
                                'extend': 'pdfHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                },
                                'download': 'open'
                            }, {
                                'text': function ( dt ) {
                                    return dt.i18n( 'buttons.sSelection', 'Selection' );
                                },
                                'extend': 'pdfHtml5',
                                'exportOptions': {
                                    'columns': ':visible',
                                    'modifier': {
                                        'selected': true
                                    }
                                },
                                'download': 'open'
                            }
                        ]
                    }
                ]
            }, {
                'text': function ( dt ) {
                    return dt.i18n( 'buttons.sPrint', 'Print' );
                },
                'extend': 'collection',
                'buttons': [
                    {
                        'text': function ( dt ) {
                            return dt.i18n( 'buttons.sAll', 'All' );
                        },
                        'extend': 'print',
                        'exportOptions': {
                            'columns': ':visible',
                        },
                        'download': 'open'
                    }, {
                        'text': function ( dt ) {
                            return dt.i18n( 'buttons.sSelection', 'Selection' );
                        },
                        'extend': 'print',
                        'exportOptions': {
                            'columns': ':visible',
                            'modifier': {
                                'selected': true
                            }
                        },
                        'download': 'open'
                    }
                ]
            },
            'colvis'
        ],
        'select': true
    } );

    $( '#wpcf7db-table tfoot input' ).on( 'keyup change', function () {
        table
            .column( $( this ).parent().index() + ':visible' )
            .search( this.value )
            .draw();
    } );

    $( '#wpcf7db-table tfoot tr' ).appendTo( '#wpcf7db-table thead' );

    $( '#delete' ).click( function ( e ) {
        e.preventDefault();
        if ( confirm( parameters.confirm ) ) {
            var selected = $( '.selected' ).map( function() {
                table.row( '.selected' ).remove().draw( false );
                return $( this ).attr( 'data-id' );
            } ).get().join();

            if ( selected.trim() ) {
                $.ajax({
                    'url' : parameters.ajax_url,
                    'type' : 'post',
                    'data' : {
                        'action' : 'wpcf7db_delete',
                        'selected' : selected
                    },
                    success : function( response ) {
                        $( '.results' ).html( response );
                    }
                } );
            }
        }
    } );

} )( jQuery );