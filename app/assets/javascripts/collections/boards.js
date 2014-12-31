TrelloClone.Collections.Boards = Backbone.Collection.extend ({
  model: TrelloClone.Models.Board,

  url: 'api/boards',

  getOrFetch: function (id) {
    var maybeBoard = this.get(id);

    if (maybeBoard) {
      maybeBoard.fetch();
      return maybeBoard;
    } else {
      var maybeBoard = new TrelloClone.Models.Board({id: id})
      maybeBoard.fetch({
        success: function () {
          this.add(maybeBoard);
        }.bind(this),
        error: function () {
          console.log('no such board id')
        }
      })
    }
    return maybeBoard;
  }

})
