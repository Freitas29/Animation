#### The intuit to this files is to help me create animations with react, but  if  someone want use, okay :)

# How to use

### Import Animation to your file

```
import Animation from 'you_path'
```

### Attributes you can change

| Attributes | Description | Type | Options 
| ------ | ------ |------ | ----- |
| minSize, maxSize | Size of each element generate random | Number | Any
| minPosition, maxPosition | Position of each in a element father | Number | Any
| minDelay, maxDelay | Time of each element before animation start | Number | Any
| minDuration, maxDuration | Time of each element in screen | Number | Any
| count | Numbers of elements | Number | Any
| color | Color of each element | String | Any
| velocity | Velocity of each element in screen | Number |Any
| direction | Direction of each element | String | normal/alternate/reverse/alternate-reverse/initial/inherit
| type | Type object | String | default is squares, Circles
# Example 
```
    <Animation
    count={50}
    direction={'alternate'}
    velocity={6}
    type={'circles'}
    />
```

