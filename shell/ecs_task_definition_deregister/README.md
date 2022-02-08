# How to use

```
$ sh ecs_task_definition_deregister.sh TASK_DEFINITION_NAME
Deregister the task definition of "TASK_DEFINITION_NAME"? (y/N):   // Enter y to continue processing, or N to abort.
TASK_DEFINITION_NAME:revision deregister completed.
TASK_DEFINITION_NAME:revision deregister completed.
TASK_DEFINITION_NAME:revision deregister completed.
TASK_DEFINITION_NAME:revision deregister completed.
TASK_DEFINITION_NAME:revision deregister completed.
...
```

# Caution

If there are many task definitions, the following error may occur.

```
An error occurred (ThrottlingException) when calling the DeregisterTaskDefinition operation (reached max retries: 2): Rate exceeded
```

This is a limit that cannot be relaxed, so if you get this error, try running this shell again.
