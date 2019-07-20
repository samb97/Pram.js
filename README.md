# Pram.js
#### JavaScript parameter manipulation.

## Get raw parameters as string

    pram.queries();
    
#### Will return:
    '?these_are=123&some_parameters=xyz'

---

## Get structured parameters

    pram.get();
    
#### Will return:
    [
        {
            text: 'these_are',
            value: '123',
        },
        {
            text: 'some_parameters',
            value: 'xyz',
        },
    ]
    
---

## Get a specific parameters value

    pram.get('these_are');
    
#### Will return:
    '123'

---

## Add a parameter

    pram.add('foo', 'bar');

#### Will add:
##### Parameter...

    'foo'
    
##### With value of...

    'bar'
    
---

## Modify a parameter

    pram.modify('foo', 'bizarre');

#### Will modify:
##### Parameter...

    'foo'
    
##### With value of...

    'bizarre'
    
---

## Remove a parameter

    pram.remove('foo');

#### Will remove:
##### Parameter...

    'foo'
