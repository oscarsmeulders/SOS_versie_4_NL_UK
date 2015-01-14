/*global Reveal,Walker,jQuery */

var RevealWalker = function() {
    Walker.call(this);

    this.directionFuncs.push( this.getFlips );
};

// Inheritance
RevealWalker.prototype = new Walker();
RevealWalker.prototype.constructor = RevealWalker;

RevealWalker.prototype.reset = function( range )
{
    Walker.prototype.reset.call( this, range );

    this.flips = [];
};

RevealWalker.prototype.run = function( startTile, range )
{
    Walker.prototype.run.call( this, startTile, range );

    return {
        'slides': this.visited,
        'flips': this.flips
    };
};

RevealWalker.prototype.getUp = function( tile )
{
    // Test return of previousSibling in non webkit browsers
    return this.hasVertical( tile ) ? this.getPreviousSection( tile ): null;
};

RevealWalker.prototype.getNextSection = function( tile )
{
    var nextSection = tile.nextSibling;
    while( nextSection && !this.isSection( nextSection) ) {
        nextSection = nextSection.nextSibling;
    }
    return nextSection;
};
RevealWalker.prototype.getPreviousSection = function( tile )
{
    var previousSection = tile.previousSibling;
    while( previousSection && !this.isSection( previousSection ) ) {
        previousSection = previousSection.previousSibling;
    }
    return previousSection;
};
RevealWalker.prototype.isSection = function( tile )
{
    return tile.nodeName !== "#text" && tile.tagName.toLowerCase() === "section";
};

RevealWalker.prototype.getRight = function( tile )
{
    var topMost = this.hasVertical( tile ) ? tile.parentNode : tile,
        nextColumn = this.getNextSection( topMost );

    return nextColumn ? this.getHorizontal( nextColumn ) : null;
};

RevealWalker.prototype.getHorizontal = function ( slide )
{
    if( this.isVerticalColumn( slide ) ) {
        var verticalIndex = slide.getAttribute(
            "data-previous-indexv"
        ) || 0;
        return slide.getElementsByTagName("section")[verticalIndex];
    } else {
        return slide;
    }
};

RevealWalker.prototype.getDown = function( tile )
{
    // Test return of nextSibling in non webkit browsers
    return this.hasVertical( tile ) ? this.getNextSection( tile ): null;
};

RevealWalker.prototype.getLeft = function( tile )
{
    var topMost = this.hasVertical( tile ) ? tile.parentNode : tile,
        previousColumn = this.getPreviousSection( topMost );

    return previousColumn ? this.getHorizontal( previousColumn ) : null;
};

/**
 * Gets all the flips for a tile and stores them in an array
 *
 * Uses walkDirections but always returns null as it does its own thing
 */
RevealWalker.prototype.getFlips = function( tile )
{
    var flips = jQuery( "[data-flip-type]", tile ).toArray();
    this.flips.push.apply(this.flips, flips);

    return null;
};

RevealWalker.prototype.hasVertical = function( tile )
{
    return Reveal.isInColumn(tile);
};

/**
 * Return whether the current <section> is a vertical column of slides
 *
 * :column: <section> node to check
 */
RevealWalker.prototype.isVerticalColumn = function ( column )
{
    return !!column.querySelector("section");
};
