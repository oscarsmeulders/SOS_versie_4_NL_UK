var Walker = function()
{
    // Functions to loop over to get surrounding elements
    this.directionFuncs = [
        this.getUp,
        this.getRight,
        this.getDown,
        this.getLeft
    ];
};

/**
 * Return if a tile has already been visited
 *
 * :tile: Tile to check:
 */
Walker.prototype.hasVisited = function( tile )
{
    return tile.id in this.visited;
};

/**
 * Add a tile to the list of visited tiles
 *
 * :tile: Tile to add
 */
Walker.prototype.addVisited = function( tile )
{
    this.visited[ tile.id ] = tile;
};

/**
 * Add a tile to the visited and tovisit arrays
 *
 * toVisit means to visit it's adjacent tiles and
 * visited means that the tile itself has been visited
 *
 * :tile: Tile to register
 * :range: How far we can still travel from this tile
 */
Walker.prototype.registerTile = function( tile, range)
{
    this.addVisited( tile );

    if( range > 0 ) {
        this.toVisit.push( [tile, range] );
    }
};

/**
 * Reset the Walker's state and set the range
 *
 * :range: Range to set
 */
Walker.prototype.reset = function( range )
{
    this.range = range;
    this.visited = {};
    this.toVisit = [];
};

/**
 * Start the walker
 *
 * :startTile: Tile to start on
 * :range: Maximum range of the walker
 *
 * :return: List of tiles reachable
 */
Walker.prototype.run = function( startTile, range )
{
    this.reset( range );
    this.registerTile( startTile, this.range );

    // Continue visiting tiles until there's none left
    while( this.toVisit.length > 0 ) {
        var tile = this.toVisit.pop();
        this.walkDirections( tile[0], tile[1] );
    }

    return this.visited;
};

/**
 * Walks in every direction from :startTile:
 *
 * :startTile: Tile to start from
 * :range: Remaining range to go
 */
Walker.prototype.walkDirections = function( startTile, range )
{
    var directionFunc,
        tile;

    for( var i in this.directionFuncs ) {
        tile = this.directionFuncs[i].call( this, startTile );

        // If the tile exists and we haven't visited it yet
        if( tile && !this.hasVisited( tile ) ) {
            this.registerTile( tile, range - 1);
        }
    }
};

Walker.prototype.getVisitedLength = function()
{
    var length = 0,
        key;

    for( key in this.visited ) {
        if ( this.visited.hasOwnProperty( key ) ) {
            length++;
        }
    }
    return length;
};


/**
 * Empty placeholders for the movement methods
 *
 * These should be implemented by classes inheriting fe
 *
 * :tile: Tile of which to fetch the tile above/below/right/left of it for
 *
 * :return: The found tile or NULL if none
 */
Walker.prototype.getUp = function( tile ) { };
Walker.prototype.getRight = function( tile ) { };
Walker.prototype.getDown = function( tile ) { };
Walker.prototype.getLeft = function( tile ) { };
