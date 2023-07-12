# fs

## currentDirectory
```buzz
fun currentDirectory() > str !> FileSystemError, InvalidArgumentError 
```
Returns current directory absolute path

**Returns:**  current directory
## makeDirectory
```buzz
fun makeDirectory(str path) > void !> FileSystemError, UnexpectedError 
```
Creates directory path
- **`path`:** directory to create

## delete
```buzz
fun delete(str path) > void !> FileSystemError, UnexpectedError 
```
Deletes directory or file at path
- **`path`:** direcotry/file to delete

## move
```buzz
fun move(str source, str destination) > void !> FileSystemError, UnexpectedError 
```
Moves/renames file
- **`destination`:** where to move it

## list
```buzz
fun list(str path) > [str] !> FileSystemError, UnexpectedError 
```
List files under path
- **`path`:** directory to list