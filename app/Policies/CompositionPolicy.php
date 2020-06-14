<?php

namespace App\Policies;

use App\Models\Composition;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CompositionPolicy
{
    use HandlesAuthorization;

    public function before(User $user)
    {
        foreach ($user->roles as $role) {
            if ($role->name === 'admin') return true;
        }
    }

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Composition $composition
     * @return mixed
     */
    public function view(User $user, Composition $composition)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Composition $composition
     * @return mixed
     */
    public function update(User $user, Composition $composition)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Composition $composition
     * @return mixed
     */
    public function delete(User $user, Composition $composition)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Composition $composition
     * @return mixed
     */
    public function restore(User $user, Composition $composition)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Composition $composition
     * @return mixed
     */
    public function forceDelete(User $user, Composition $composition)
    {
        //
    }
}
