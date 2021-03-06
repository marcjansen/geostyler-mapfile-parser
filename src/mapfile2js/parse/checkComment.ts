const regExpHexColor = new RegExp('["\']#[0-9a-f]{6}["\']|["\']#[0-9a-f]{3}["\']', 'gi');

/**
 *
 * @param {string} line A line of mapfile
 * @returns {object} A line object
 */
export function checkComment(line: string): object {
  const lineObject = {
    includesComment: false,
    comment: '',
    contentWithoutComment: line,
  };

  // check if the comment character is included
  if (line.includes('#')) {
    // remove all hex colors
    const withoutHex = line.replace(regExpHexColor, '');

    // check if comment is included
    if (withoutHex.includes('#')) {
      lineObject.includesComment = true;

      let foundComment = false;
      let comment = '';
      for (let j = 0; j < withoutHex.length; j++) {
        if (foundComment) {
          comment += withoutHex.charAt(j);
        }
        if (withoutHex.charAt(j) === '#') {
          foundComment = true;
        }
      }
      lineObject.contentWithoutComment = line.replace(`#${comment}`, '').trim();
      lineObject.comment = comment.trim();
    }
  }

  return lineObject;
}
