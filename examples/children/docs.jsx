var React = require('react/addons');
var Highlight = require('react-highlight');

var Example = require('./example.jsx');
var code = require('!!raw!./example.jsx')
  .replace('../../src/form.jsx', 'react-composable-form')
  .replace('\nmodule.exports = Form;', '');

var Docs = React.createClass({
  render: function () {
    return (<div className="docs">
      <h2>Child components</h2>

      <p>Inputs can be linked in child components too; all you have to do is include <code>FormMixin</code>.</p>

      <div className="example"><Example /></div>
      <Highlight className="javascript">
        {code}
      </Highlight>
    </div>);
  }
});

module.exports = Docs;

