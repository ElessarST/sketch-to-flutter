export default `new AppBar(
    leading: new IconButton(
      icon: new Icon(Icons.menu),
      onPressed: null,
    ),
    <% if (title) { %>
      title: new Text('<%= title %>'),
    <% } %>
    actions: <Widget>[
      new IconButton(
        icon: new Icon(Icons.search),
        tooltip: 'Search',
        onPressed: null,
      ),
    ],
),`;
