method-call
===========

This library allows you to use _ style method calls like in Scala.

## Usage

```javascript
import _ from 'method-call'

const names = ['fabien', 'donny', 'dave'];

const NAMES = names.map(_.toUpperCase); // ['FABIEN', 'DONNY', 'DAVE'];
```

```javascript
import _ from 'method-call'
import Model from 'some-mvc'

class Document extends Model{
    constructor(id){
        this.id = id;
        super(id);
    }

    save(){
        const url = '/documents/' + this.id;
        return this.sync.post(url, this.attributes);
    }

}

let docs = [new Document(1), new Document(20)];

docs.forEach(_.save); // equiv to docs.forEach(d => d.save);
```
