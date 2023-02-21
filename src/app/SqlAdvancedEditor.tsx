import CodeMirror from '@uiw/react-codemirror';
import { sql, StandardSQL } from '@codemirror/lang-sql';
import { EditorView } from '@codemirror/view';

import { autocompletion } from '@codemirror/autocomplete';

const testId = `sql-editor`;

export const basicSetup = {
  lineNumbers: false,
  highlightActiveLineGutter: false,
  foldGutter: false,
  dropCursor: false,
  allowMultipleSelections: false,
  indentOnInput: false,
  highlightActiveLine: false,
};

export const SQLAdvancedEditorInternal = () => {
  return (
    <CodeMirror
      value={'select'}
      height="100%"
      width="100%"
      extensions={[
        autocompletion({ icons: false }),
        sql({ dialect: StandardSQL, upperCaseKeywords: true }),
        EditorView.lineWrapping,
      ]}
      basicSetup={basicSetup}
      data-testid={testId}
    />
  );
};
