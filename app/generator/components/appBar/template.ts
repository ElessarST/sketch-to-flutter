export default `new AppBar(
<% if (leading) { %>
    leading: new IconButton(
      icon: new Icon(Icons.<%= leading.name %>),
      onPressed: null,
    ),
<% } %>
<% if (title) { %>
    title: new Text('<%= title %>'),
<% } %>
    actions: <Widget>[
<% actions.forEach(function(action){ %>
        new IconButton(
            icon: new Icon(Icons.<%= action.name %>),
            onPressed: null,
        ),
<% }); %>
    ],
),`;
